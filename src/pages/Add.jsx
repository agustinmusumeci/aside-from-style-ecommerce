import NavigationButton from "../components/NavigationButton";
import AddForm from "../components/Forms/AddForm";
import useReset from "../hooks/useReset";
import PageTitle from "../components/PageTitle";

function Add() {

    const AddToDB = (e, nameRef, descRef, categoryRef, priceRef, stockRef, amountRef) => {
        e.preventDefault();
        const body = {
                        name:nameRef.current.value, 
                        desc: descRef.current.value,
                        price: priceRef.current.value, 
                        stock: stockRef.current.value,
                        category: categoryRef.current.value,
                        amount: amountRef.current.value
                        }
        postNewData(body, "add-product-api")
    }

    const postNewData = async (body, param) => {
        try {
            const response = await fetch(`https://mongoecommerceapi.onrender.com/${param}`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body),
                credentials: "omit"
            })

            const data = await response.json()
            alert(data.message)

        } catch (error){
            console.log("Posting data error - ", error)
        }
    }

    return (
        <main>
            <section className="fluid-container">
                <PageTitle title="Add Product" style="pb-5">
                    <NavigationButton url="/control-panel" message="Go back"/>
                </PageTitle>
            </section>
            <section>
                <AddForm handleReset={useReset} AddToDB={AddToDB}></AddForm>
            </section>
        </main>
    );
}

export default Add