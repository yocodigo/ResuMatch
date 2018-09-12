import React from 'react';

const Upload = props => (
    
        <form> 
            <div className="form-group" style={{marginBottom:0}}>
                <label className="btn btn-default btn-file"> Submit Resume
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" style={{display: "none"}} />
                </label>
            </div>
        </form> 
    
);

export default Upload;