import React from 'react'
import '../App.css'

export default function Gallery({ data }) {
    return (
        <div className="row">
            {
                data.map((image) => {
                    const imageURL=`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`;
                    return<div key={image.id} className='col-md-2 mb-2'>
                        <div className="image-container">
                            <img src={imageURL}
                                height="200" width="250" alt={image.title} className=''/>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
//`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`
// <img  className='col-2  mb-2 mt-3' key={i} src={imageURL} width="auto" height="auto"  />;
//