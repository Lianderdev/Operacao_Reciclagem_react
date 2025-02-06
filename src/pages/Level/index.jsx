import { Content } from '../../components/content';
import game_cover from '../../assets/CapaJogo.png'
import { Button } from '../../components/button';
import './level.css'


export function Level(){
    return(
        <>
        <Content>
            <div className='level'>
                <h1 className='Title_level'>Escolha a sua fase</h1>
                
                <Button link ='/level_1'>Level 1</Button>
                <Button>Level 2</Button>
                <Button>Level 3</Button>
                <Button>Level 4</Button>
                <Button>Level 5</Button>
                <Button link='/menu'>Voltar para o menu</Button>
            </div>
        </Content>
        </>
    )
}