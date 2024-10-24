document.addEventListener('DOMContentLoaded', function () {
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      var videoElement = document.querySelector('.video-background');
      videoElement.play();
    }
  });

  document.addEventListener('DOMContentLoaded', async () => {
    const videoElement = document.querySelector('.video-background');
  

        const ffmpeg = await ffmpeg.createFFmpeg({
            log: true,
        });
        await ffmpeg.load();

        // Extrair o vídeo em formato raw
        ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(videoElement.src));

        // Processar o vídeo com upscaling usando filtros do ffmpeg
        await ffmpeg.run('-i', 'input.mp4', '-vf', 'scale=iw*2:ih*2', 'output.mp4');

        // Obter o vídeo processado
        const data = ffmpeg.FS('readFile', 'output.mp4');

        // Converter o arquivo processado em uma URL para o navegador
        const url = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));

        // Atualizar a origem do vídeo para o novo arquivo processado
        videoElement.src = url;
        videoElement.play();
    });

    
    

    