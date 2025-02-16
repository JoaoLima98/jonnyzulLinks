
   async function checkTwitchLive() {
    const clientId = 'gp762nuuoqcoxypju8c569th9wz7q5';
    const accessToken = 'we23lac9cznync9c6auu3rkp1866of';
    const userLogin = 'jonnyzul';
    
    const url = `https://api.twitch.tv/helix/streams?user_login=${userLogin}`;
    
    try {
        const response = await fetch(url, {
            headers: {
                'Client-ID': clientId,
                'Authorization': `Bearer ${accessToken}`
            }
        });

        const data = await response.json();
        const liveNeon = document.getElementById('liveNeon');
        const liveBackground = document.getElementById('liveBackground');
        if (data.data && data.data.length > 0) {
            // O canal está ao vivo – mostra o aviso neon
            liveBackground.style.display = 'block';
            liveNeon.style.display = 'block';
        } else {
            // Não está ao vivo – esconde o aviso
            liveBackground.style.display = 'none';
            liveNeon.style.display = 'none';
        }
    } catch (error) {
        console.error('Erro ao verificar o status ao vivo:', error);
    }
}

document.addEventListener('DOMContentLoaded', checkTwitchLive);