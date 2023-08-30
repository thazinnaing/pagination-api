

const PageButtons=({page, setPage, isPreviousData})=>{
    console.log("isPreviousData ,,,,,,", isPreviousData);
    return <button onClick={()=>setPage(page)} disabled={isPreviousData}>{page}</button>
}

export default PageButtons;