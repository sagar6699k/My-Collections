import "./profilePage.css"

const ProfilePage = () => {
    return (
        <div className="login_form">

                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="email@example.com"
                         name="email"  value={""} onChange={"handleChange"}
                        />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password"
                        name="password"  value={""} onChange={"handleChange"}
                        />
                    </div>
                </div>

                <button type="submit" onClick={""} class="btn btn-primary">
                    Submit
                </button>


            </div>
    )
}

export default ProfilePage
