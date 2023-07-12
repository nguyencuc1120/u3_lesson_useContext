//imports here!
import { useContext } from "react"
import DataContext from "../DataContext"
import ComponentC from "./ComponentC"

export default function ComponentA () {

    //pulling in data:
    const { userInfo, setUserInfo } = useContext(DataContext)

    return (
        <div className="card">
            <h2>This is component A</h2>
            <p>{userInfo.name}'s favorite color is</p>
            <p style={{color:userInfo.favColor}}>{userInfo.favColor}</p>
            <p>and her favorite food is {userInfo.favFood}</p>
            <button onClick={()=>{
                setUserInfo({
                    //take the set of info and changing one/or more of it
                    ...userInfo,
                    favColor:"blue"
                })
            }}>Make blue</button>
            <button onClick={()=>{
                setUserInfo({
                    //take the set of info and changing one/or more of it
                    ...userInfo,
                    favColor:"green"
                })
            }}>Make green</button>
            <button onClick={()=>{
                setUserInfo({
                    //take the set of info and overrides one/or more of it
                    ...userInfo,
                    favColor:"red"
                })
            }}>Make red</button>

            <div>
                <ComponentC/>
            </div>
        </div>

    )
}