import { useEffect } from 'react';

export function Welcome() {
    useEffect(() => {
        const audio = new Audio("/src/Sons/SomFundo.mp3");
        audio.loop = true;

        const playAudio = async () => {
            try {
                await audio.play();
            } catch (error) {
                console.log("Autoplay bloqueado, aguardando interação do usuário...");
            }
        };

        playAudio();

        return () => {
            audio.pause();
        };
    }, []);

    return (
        <div style={{ 
            margin: 0, 
            padding: 0, 
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            textAlign: 'center', 
            background: 'url("/src/Imagens/CapaJogo.png") no-repeat center center/cover', 
            color: 'white', 
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 className="animate__animated animate__heartBeat animate__infinite" style={{
                fontFamily: "'Press Start 2P', cursive", 
                fontSize: 42,
                color: 'rgb(2, 77, 25)', 
                textShadow: '2px 2px 10px rgb(255, 239, 12)'
            }}>
                OPERAÇÃO RECICLAGEM!
            </h1>
        </div>
    );
}
