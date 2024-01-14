import Icon from "../Icon/Icon";

function Card({GameEnd, player ,onPlay ,index }) {
    let icon = <Icon />

    if (player == "X") {
        icon = <Icon name="cors" />
    } else if (player == "O") {
        icon = <Icon name="circle" />
    }
    return (

        <div className=" border-2 border-black p-2 flex justify-center items-center w-[80px] h-[80px]  md:w-[120px] md:h-[120px] rounded-2xl bg-yellow-300" onClick={() => !GameEnd && player=="" &&onPlay(index)}>
            {icon}
        </div>
    )
}
export default Card;