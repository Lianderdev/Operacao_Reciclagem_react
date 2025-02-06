import { useEffect } from 'react';
import { Content } from '../../components/content';
import game_cover from '../../assets/CapaJogo.png'
import './style.css'
import { Button } from '../../components/button';

export function Welcome() {
    /*useEffect(() => {
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
    }, []); */

    return (
        <Content>
            <div className='welcome'>
                <img className='game_cover' src={game_cover} alt="" />
                <h1 className="title_welcome animate__animated animate__heartBeat animate__infinite">
                    OPERAÇÃO RECICLAGEM!
                </h1>
                <Button link="/menu">Começar</Button>
            </div>
        </Content>
    );
}
