import NavigationButton from "../components/NavigationButton";
import AddForm from "../components/Forms/AddForm";
import useReset from "../hooks/useReset";
import usePost from "../hooks/usePost";
import PageTitle from "../components/PageTitle";

function Add() {

    const {postData} = usePost();

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
        const response = postData(body, "add-product-api")
        response.then(res => alert(res.message))
    }

    return (
        <main>
            <section className="fluid-container">
                <PageTitle title="Add Product" style="pb-5">
                    <NavigationButton url="/aside-from-style-ecommerce/control-panel" message="Go back"/>
                </PageTitle>
            </section>
            <section>
                <AddForm handleReset={useReset} AddToDB={AddToDB}></AddForm>
            </section>
        </main>
    );
}

export default Add