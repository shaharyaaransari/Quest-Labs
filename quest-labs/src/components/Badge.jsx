import React from "react"
  import "./Badege.css"
import Modal from "./Modal";
export default function Badge({ badge }) {
  
  return (
    <div className="badge-container" >
      {badge &&
        badge?.data?.map((item) => {
          return (
            <div key={item._id} className="badge-subcont">
              <div style={{width:'100px',marginBottom:"20px" }}>
                <img src={item?.imageUrl} alt={item?.name} />
              </div>
            </div>
          );
        })}
      <Modal badge={badge}/>
    </div>
  );
}
