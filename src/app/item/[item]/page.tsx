export default function ItemPage({params}){
    return (
        <div>
            <h1 className="text-3xl font-semibold">{params.item} Page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quo incidunt, atque omnis magni dolor blanditiis quaerat hic voluptatibus inventore laboriosam magnam ullam. Sit vero at, tempore itaque magnam natus!
            </p>
        </div>
    );
}