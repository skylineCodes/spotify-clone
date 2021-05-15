import React from 'react';
import '../css/sidebar.css';
import SidebarOption from './SidebarOption';
import { Home, Search, LibraryMusic } from '@material-ui/icons';
import { useDataLayerValue } from '../DataLayer';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
      <div className='sidebar'>
        <img
          className='sidebar__logo'
          src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
          alt=''
        />
        <SidebarOption title='Home' Icon={Home} />
        <SidebarOption title='Search' Icon={Search} />
        <SidebarOption title='Your Library' Icon={LibraryMusic} />

        <br />
        <strong className='sidebar__title'>PLAYLISTS</strong>
        <hr />

        {playlists?.items?.map((playlist) => (
          <SidebarOption title={playlist.name} />
        ))}
      </div>
    );
}

export default Sidebar
