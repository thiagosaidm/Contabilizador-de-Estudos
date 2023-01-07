function Form() {
    
    return (
        <>
            <form action="" className="linguagens">
                <label htmlFor="html" className="html">
                    <input type="checkbox" name="Hmtl" id="html" />
                    HTML
                </label>

                <label htmlFor="css" className="css">
                    <input type="checkbox" name="CSS" id="css" />
                    CSS
                </label>

                <label htmlFor="javascript" className="javascript">
                    <input type="checkbox" name="JavaScript" id="javascript"/>
                    Javascript
                </label>

                <label htmlFor="react" className="react">
                    <input type="checkbox" name="React" id="react" />
                    React
                </label>

            </form>
        </>
    )
}


export default Form;