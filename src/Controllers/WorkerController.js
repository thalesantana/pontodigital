import { create } from '../Models/Worker';

export async function store(req, res) {
    const {
        name,
        cpf,
        email,
        tel,
        ocupation,
        entry_time,
        exit_time,
        lunch_entry,
        lunch_return
    } = req.body;

    const worker = await create(
        {
            name,
            cpf,
            email,
            tel,
            ocupation,
            entry_time,
            exit_time,
            lunch_entry,
            lunch_return
        });

    return res.json(worker);
}