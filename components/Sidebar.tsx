import React from 'react'
import SidebarRow from './SidebarRow'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,
} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div className='fle flex-col'>
        <img className='h-10 w-10' src="https://links.papareact.com/drq" alt="" />
        <SidebarRow Icon={HomeIcon} title="home" />
        <SidebarRow Icon={HashtagIcon} title="Explore" />
        <SidebarRow Icon={BellIcon} title="Notifications" />
        <SidebarRow Icon={MailIcon} title="Messages" />
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
        <SidebarRow Icon={CollectionIcon} title="Lists" />
        <SidebarRow Icon={UserIcon} title="Sign In" />
        <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default Sidebar