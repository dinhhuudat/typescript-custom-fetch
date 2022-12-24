interface reponseA {
  name:string
}

// WindowOrWorkerGlobalScope
const getDate =async ()=>{
  const res=await fetch<reponseA>("")
}

export default getDate