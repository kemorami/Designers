function Contacts() {
    return(
        <div class="contacts">
            <h2>Contact</h2>
            <hr/>
            <p>Do you want us to style your home? Fill out the form and fill me in with the details :) We love meeting new people!
            </p>
            <form action=""> 
                <label for="">
                    Name
                </label>
                <input type="text"/>
                <label for="">
                    Email
                </label>
                <input type="email"/>
                <label for="">
                    Message
                </label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Send Message" class="button"/>
            </form>
        </div>
    )
}
export default Contacts