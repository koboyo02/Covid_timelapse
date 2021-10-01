import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// var map = document.querySelector('.map_image')
// var paths = map.querySelectorAll('.carteFrance')
// var links = map.querySelectorAll('.carteFrance_svg__land')

// if (NodeList.prototype.forEach === undefined) {
//   NodeList.prototype.forEach = function(callback) {
//       [].forEach.call(this, callback)
//   }
// }
// var activeArea = function(id) {

//   paths.querySelectorAll('.is-active').forEach(function(item) {
//       item.classList.remove('is-active')
//   })
//   if (id !== undefined) {
//       document.querySelector('#FR-' + id).classList.add('is-active')
//       document.querySelector('#L-' + id).classList.add('is-active')
//   }
// }
// paths.forEach(function(path) {
//   path.addEventListener('mouseenter', function(e) {
//       var id = this.id.replace('L-', '')
//       activeArea(id)
//   })
// })

// links.forEach(function(link) {
//   link.addEventListener('mouseenter', function() {
//       var id = this.id.replace('FRN-', '')
//       activeArea(id)
//   })
// })

// links.forEach(element => {
//   console.log(links)
// });
// console.log(links )

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="test">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Départements
      </Button>
      <Menu
        className="map_liste"
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Ain" className="carteFrance_svg__land">Ain</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Aisne" className="carteFrance_svg__land">Aisne</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Allier" className="carteFrance_svg__land">Allier</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Alpes-de-Haute-Provence" className="carteFrance_svg__land">Alpes-de-Haute-Provence</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Hautes-Alpes" className="carteFrance_svg__land">Hautes-Alpes</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Alpes-Maritimes" className="carteFrance_svg__land">Alpes-Maritimes</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Ardèche" className="carteFrance_svg__land">Ardèche</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Ardennes" className="carteFrance_svg__land">Ardennes</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Ariège" className="carteFrance_svg__land">Ariège</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Aube" className="carteFrance_svg__land">Aube</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Aude" className="carteFrance_svg__land">Aude</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Aveyron" className="carteFrance_svg__land">Aveyron</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Bouches-du-Rhône" className="carteFrance_svg__land">Bouches-du-Rhône</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Calvados" className="carteFrance_svg__land">Calvados</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Cantal" className="carteFrance_svg__land">Cantal</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Charente" className="carteFrance_svg__land">Charente</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Charente-Maritime" className="carteFrance_svg__land">Charente-Maritime</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Cher" className="carteFrance_svg__land">Cher</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Corrèze" className="carteFrance_svg__land">Corrèze</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Corse-du-Sud" className="carteFrance_svg__land">Corse-du-Sud</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Haute-Corse" className="carteFrance_svg__land">Haute-Corse</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Côte-d'Or" className="carteFrance_svg__land">Côte-d'Or</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Côtes-d'Armor" className="carteFrance_svg__land">Côtes-d'Armor</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Creuse" className="carteFrance_svg__land">Creuse</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Dordogne" className="carteFrance_svg__land">Dordogne</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Doubs" className="carteFrance_svg__land">Doubs</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Drôme" className="carteFrance_svg__land">Drôme</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Eure" className="carteFrance_svg__land">Eure</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Eure-et-Loir" className="carteFrance_svg__land">Eure-et-Loir</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Finistère" className="carteFrance_svg__land">Finistère</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Gard" className="carteFrance_svg__land">Gard</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Haute-Garonne" className="carteFrance_svg__land">Haute-Garonne</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Gers" className="carteFrance_svg__land">Gers</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Gironde" className="carteFrance_svg__land">Gironde</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Hérault" className="carteFrance_svg__land">Hérault</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Ille-et-Vilaine" className="carteFrance_svg__land">Ille-et-Vilaine</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Indre" className="carteFrance_svg__land">Indre</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Indre-et-Loire" className="carteFrance_svg__land">Indre-et-Loire</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Isère" className="carteFrance_svg__land">Isère</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Jura" className="carteFrance_svg__land">Jura</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Landes" className="carteFrance_svg__land">Landes</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Loir-et-Cher" className="carteFrance_svg__land">Loir-et-Cher</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Loire" className="carteFrance_svg__land">Loire</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Haute-Loire" className="carteFrance_svg__land">Haute-Loire</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Loire-Atlantique" className="carteFrance_svg__land">Loire-Atlantique</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Loiret" className="carteFrance_svg__land">Loiret</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Lot" className="carteFrance_svg__land">Lot</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Lot-et-Garonne" className="carteFrance_svg__land">Lot-et-Garonne</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Lozère" className="carteFrance_svg__land">Lozère</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Maine-et-Loire" className="carteFrance_svg__land">Maine-et-Loire</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Manche" className="carteFrance_svg__land">Manche</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Marne" className="carteFrance_svg__land">Marne</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Haute-Marne" className="carteFrance_svg__land">Haute-Marne</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Mayenne" className="carteFrance_svg__land">Mayenne</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Meurthe-et-Moselle" className="carteFrance_svg__land">Meurthe-et-Moselle</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Meuse" className="carteFrance_svg__land">Meuse</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Morbihan" className="carteFrance_svg__land">Morbihan</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Moselle" className="carteFrance_svg__land">Moselle</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Nièvre" className="carteFrance_svg__land">Nièvre</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Nord" className="carteFrance_svg__land">Nord</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Oise" className="carteFrance_svg__land">Oise</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Orne" className="carteFrance_svg__land">Orne</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Pas-de-Calais" className="carteFrance_svg__land">Pas-de-Calais</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Puy-de-Dôme" className="carteFrance_svg__land">Puy-de-Dôme</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Pyrénées-Atlantiques" className="carteFrance_svg__land">Pyrénées-Atlantiques</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Hautes-Pyrénées" className="carteFrance_svg__land">Hautes-Pyrénées</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Pyrénées-Orientales" className="carteFrance_svg__land">Pyrénées-Orientales</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Bas-Rhin" className="carteFrance_svg__land">Bas-Rhin</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Haut-Rhin" className="carteFrance_svg__land">Haut-Rhin</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Rhône" className="carteFrance_svg__land">Rhône</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Haute-Saône" className="carteFrance_svg__land">Haute-Saône</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Saône-et-Loire" className="carteFrance_svg__land">Saône-et-Loire</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Sarthe" className="carteFrance_svg__land">Sarthe</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Savoie" className="carteFrance_svg__land">Savoie</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Haute-Savoie" className="carteFrance_svg__land">Haute-Savoie</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Paris" className="carteFrance_svg__land">Paris</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Seine-Maritime" className="carteFrance_svg__land">Seine-Maritime</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Seine-et-Marne" className="carteFrance_svg__land">Seine-et-Marne</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Yvelines" className="carteFrance_svg__land">Yvelines</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Deux-Sèvres" className="carteFrance_svg__land">Deux-Sèvres</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Somme" className="carteFrance_svg__land">Somme</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Tarn" className="carteFrance_svg__land">Tarn</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Tarn-et-Garonne" className="carteFrance_svg__land">Tarn-et-Garonne</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Var" className="carteFrance_svg__land">Var</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Vaucluse" className="carteFrance_svg__land">Vaucluse</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Vendée" className="carteFrance_svg__land">Vendée</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Vienne" className="carteFrance_svg__land">Vienne</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Haute-Vienne" className="carteFrance_svg__land">Haute-Vienne</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Vosges" className="carteFrance_svg__land">Vosges</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Yonne" className="carteFrance_svg__land">Yonne</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Territoire de Belfort" className="carteFrance_svg__land">Territoire de Belfort</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Essonne" className="carteFrance_svg__land">Essonne</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Hauts-de-Seine" className="carteFrance_svg__land">Hauts-de-Seine</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Seine-Saint-Denis" className="carteFrance_svg__land">Seine-Saint-Denis</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Val-de-Marne" className="carteFrance_svg__land">Val-de-Marne</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://google.com/?q=1" id="FR-Val-d'Oise" className="carteFrance_svg__land">Val-d'Oise</a></MenuItem>
      </Menu>
    </div>
  );
}