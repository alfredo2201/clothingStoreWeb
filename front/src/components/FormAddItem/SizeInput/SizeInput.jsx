import { useAddItem } from "../../../hooks/useAddItem";
const SizeInput = () => {
    const {handleChangeCategoryItem,sizeItem} = useAddItem()
    return (
        <div className="container" onChange={handleChangeCategoryItem}>
            <div className="row col-md-12">
                <label className="form-label">
                    <strong>Size</strong>
                </label>
                <div className="col-md-3">
                    <div className="form-check ">
                        <input id="formCheck-3" className="form-check-input" type="checkbox" />
                        <label className="form-check-label" htmlFor="formCheck-3">XS</label>
                    </div>
                    <div className="form-check">
                        <input id="formCheck-3" className="form-check-input" type="checkbox" />
                        <label className="form-check-label" htmlFor="formCheck-3">S</label>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-check">
                        <input id="formCheck-3" className="form-check-input" type="checkbox" />
                        <label className="form-check-label" htmlFor="formCheck-3">M</label>
                    </div>
                    <div className="form-check">
                        <input id="formCheck-3" className="form-check-input" type="checkbox" />
                        <label className="form-check-label" htmlFor="formCheck-3">L</label>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-check">
                        <input id="formCheck-3" className="form-check-input" type="checkbox" />
                        <label className="form-check-label" htmlFor="formCheck-3">XL</label>
                    </div>
                    <div className="form-check">
                        <input id="formCheck-3" className="form-check-input" type="checkbox" />
                        <label className="form-check-label" htmlFor="formCheck-3">2XL</label>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-check">
                        <input id="formCheck-3" className="form-check-input" type="checkbox" />
                        <label className="form-check-label" htmlFor="formCheck-3">3XL</label>
                    </div>
                    <div className="form-check">
                        <input id="formCheck-3" className="form-check-input" type="checkbox" />
                        <label className="form-check-label" htmlFor="formCheck-3">4xL</label>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SizeInput;