import { Content } from "../../components/content";
import game_cover from '../../assets/CapaJogo.png';
import { Button } from '../../components/button';
import './menu.css';

export function Menu() {
    return (
        <>
        <Content>
            <div className= 'menu'>
                <img className='game_cover' src={game_cover} alt="" />
                <h1 className="title_menu animate__animated animate__heartBeat animate__infinite">Menu principal</h1>

                <Button link="/level">Começar a jogar</Button>
                <Button link="/setting">Configuração</Button>
                <Button link="/ranking">Ranking</Button>
                <Button link="/creditos">Creditos</Button>
            </div>
            
        </Content>
        </>
    )
}