export default {

    async store(req, res) {
        console.log(req.body);
        const { name, email, password} = req.body;

        const user = {
            name,
            email,
            password
        };

        return res.json();
    }
}