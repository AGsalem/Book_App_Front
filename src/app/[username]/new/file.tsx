export default function BookFile() {
    return (
        <>
            <label className="mb-4 text-3xl font-bold">Select file pdf</label>
            <input type="file"
                id="select pdf file"
                accept=".pdf,application/pdf"
                className=" mb-4 placeholder: border-amber-50 border  rounded-2xl text-xl p-4" />
                        <button type='submit' className="text-2xl p-5 rounded-3xl bg-amber-950 font-extrabold"> Add Book</button>
        </>
    )
}
// onClick={newBook}