import "./css/Sidebar.css";
import logo from "../brandmark-design.png";
import SidebarOption from "../Components/SidebarOption";
import { collection, doc, getDocs } from "firebase/firestore"
import { db } from '../firebase/config'
import { userObject } from "../features/reducers/userSlice";
import { useDispatch, useSelector } from 'react-redux'
import { handleSelectedPath } from "../features/reducers/counterSlice";

export default function Sidebar() {
  const user = useSelector(userObject)
  const dispatch = useDispatch()

  const subcollectionRef = collection(doc(db, 'users', user.uid), 'sessionMessages');
  dispatch(handleSelectedPath(subcollectionRef.path))

  // const handleSessionPath = async () => {
  //   const subcollectionRef = await collection(doc(db, 'users', user.uid), 'sessionMessages');
  //   dispatch(handleSelectedPath(subcollectionRef.path))
  //   return subcollectionRef.path
  // }

  return (
    <div className="sidebar">
      <header className="sidebar__header">
        <img src={logo} alt="" />
        {/* CHange logo to: In House */}
      </header>
      {/* Sidebar Routes */}
      {/* links will have dynamic paths */}
      <div className="sidebar__routes">
        <SidebarOption path="" label="Home" />
        {/* Allow session link to be a reference to the document you're currently in */}
        <SidebarOption path={`session/${subcollectionRef.path}`} label="Session" />
        <SidebarOption path="goals" label="Goal Board" />
        <SidebarOption path="calendar" label="Calendar" />
        <SidebarOption path="journal" label="Journal" />
      </div>
    </div>
  );
}
