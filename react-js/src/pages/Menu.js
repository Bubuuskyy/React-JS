import { useState } from 'react';
import Tabel from './Tabel';

function Menu() {
  const titel = "Daftar Menu Restoran"
    const [menus, setMenu]=useState(
        [
            {idmenu:6, idkategori:33, menu:"Es Teh A", gambar:"tehtawar.jpg", harga:5000},
            {idmenu:7, idkategori:33, menu:"Es Teh B", gambar:"tehtawar.jpg", harga:5000},
            {idmenu:8, idkategori:33, menu:"Es Teh C", gambar:"tehtawar.jpg", harga:5000},
            {idmenu:9, idkategori:36, menu:"Batagor A", gambar:"batagorkomp.jpg", harga:4000},
            {idmenu:10, idkategori:36, menu:"Batagor B", gambar:"batagorkomp.jpg", harga:4000},        
        ]
    )
    return (
      <div className="App">
          <Tabel menu={menus} titel={titel}/>
          <Tabel menu={menus.filter((data)=>(data.idkategori==33))} titel="MINUMAN"/>
      </div>
    );
  }
  
  export default Menu;