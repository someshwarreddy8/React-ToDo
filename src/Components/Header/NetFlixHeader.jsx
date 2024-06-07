export const Header = () => {
    return (
        <>
            <header className="d-flex justify-content-between">
                <div>
                    <h2 className="text-danger">NETFLIX</h2>
                </div>
                <div>
                    <div className="input-group">
                        <span className="bi bi-translate input-group-text"></span>
                        <select name="" id="" className="form-select">
                            <option value="Lan">Language</option>
                            <option value="Eng">English</option>
                        </select>
                        <button className="btn btn-danger">Sign in</button>
                    </div>
                </div>
            </header>
        </>
    );
}