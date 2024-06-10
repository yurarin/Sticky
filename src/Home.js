import React, { useEffect, useState } from "react";
import "./styles/Home.css";
import { Add } from "./assets/index";
import { StickyNote } from "./components/index";
import { Link, useNavigate } from "react-router-dom";
import { db } from "./firebaseConfig";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";


const Home= (props) => {
    const [docsData, setDocsData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const getData = async () => {
        const stickysRef = collection(db, props.user.displayName);
        const getDocItems = await getDocs(stickysRef);
        setDocsData(getDocItems);
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
        console.log("loopしてる！！");
    },[]);

    if (isLoading) {
        return <p>読み込み中です...</p>
    }

    if (!isLoading) {
        
        const removeSticky = async (id) => {
            if(window.confirm("Stickyを剥がしますか？")){
                await deleteDoc(doc(db, props.user.displayName, id));
                navigate("/");
            }
        }

        const sticky = docsData.docs.map((res) => {
            return (
                <div className="stickyItem" key={res.id} onClick={()=>removeSticky(res.id)}>
                    <StickyNote text={res.data()["sticky"]} />
                </div>
            )
        });

        return (
            <div className="stickyContainer">
                <div className="stickyItem">
                    <Link to="/add">
                        <img src={Add} alt="img" />
                    </Link>
                </div>

                { sticky }
            
            </div>
        )
    }
}

export default Home;