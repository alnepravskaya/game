import resourcesflappy from './resources/flappy/resources';
import resourcesMario from './resources/mario/resources';
import resourcesPacman from './resources/pacman/resources';


export default  location.href.indexOf('mario')>-1? resourcesMario :(location.href.indexOf('packman')>-1?resourcesPacman:resourcesflappy ) ;



