export default function dateHandle(date){
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const finished = new Date(date).toLocaleDateString("es-DO", options);

    return finished;
}