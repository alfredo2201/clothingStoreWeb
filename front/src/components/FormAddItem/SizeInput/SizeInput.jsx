
const SizeInput = (props) => {
    const {onChangeSize} = props;    
    return (
        <div className="container" onChange={onChangeSize}>
            <div className="row col-md-12">
                <label className="form-label">
                    <strong>Size</strong>
                </label>
                <div className="col-md-3">
                    <div className="form-check">
                        <input id="formCheck-3" className="form-check-input" type="checkbox" value="S"/>
                        <label className="form-check-label" htmlFor="formCheck-3">S</label>
                    </div>
                    <div className="form-check">
                        <input id="formCheck-3" className="form-check-input" type="checkbox" value="M"/>
                        <label className="form-check-label" htmlFor="formCheck-3">M</label>
                    </div>
                    <div className="form-check">
                        <input id="formCheck-3" className="form-check-input" type="checkbox" value="L"/>
                        <label className="form-check-label" htmlFor="formCheck-3">L</label>
                    </div>
                    <div className="form-check">
                        <input id="formCheck-3" className="form-check-input" type="checkbox" value="XL"/>
                        <label className="form-check-label" htmlFor="formCheck-3">XL</label>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SizeInput;