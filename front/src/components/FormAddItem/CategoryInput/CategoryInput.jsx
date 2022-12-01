import { useAddItem } from "../../../hooks/useAddItem"
const CategoryInput =()=>{
    const {handleChangeCategoryItem} = useAddItem()
    return (
        <div className="form-group mb-3">
        <div onChange={handleChangeCategoryItem}>
            <label className="form-label mt-2">
                <strong>Category</strong>
            </label>
            <br/>
            <div className="form-check form-check-inline">                                                    
                <input className="form-check-input" type="radio" id='Man' name='category' value={'Man'} />
                <label className="form-check-label" htmlFor="formCheck-3">Man</label>
            </div>
            <div className="form-check form-check-inline">                                                    
                <input className="form-check-input" type="radio" id='Woman' name='category' value={'Woman'} />
                <label className="form-check-label" htmlFor="formCheck-3">Woman</label>
            </div>
            <div className="form-check form-check-inline">                                                    
                <input className="form-check-input" type="radio" id='Kids' name='category' value={'Kids'} />
                <label className="form-check-label" htmlFor="formCheck-3">Kids</label>
            </div>                                                
        </div>
    </div>
    )
}
export default CategoryInput