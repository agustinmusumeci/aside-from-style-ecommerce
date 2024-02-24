function PageTitle({title, style, children}) {



    return (
        <header className="pt-5 pb-5">
            <h4 className={`xl-title ${style}`}>
                {title}
            </h4>
            <p className="text-sm -mt-2">
                {children}
            </p>
        </header>
    );
}

export default PageTitle