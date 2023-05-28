import Mail from "../lib/mail";

export default {
    key: 'RegistrationMail',
    async handle({ data }) {
        const { user } = data;

        await Mail.sendMail({
            from: 'Queue test <queue@gmail.com>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de Usuário',
            html: `Olá, ${name}, Bem-vindo ao sistema! :)`
        });
    }
};