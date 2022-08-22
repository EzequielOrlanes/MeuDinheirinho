import "./Cards.css";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

export function Cards() {
  return (
    <>
      <div className="cartoes">
        <div className="Entrada">
          <ArrowDownwardRoundedIcon />
        </div>
        <div className="Saida">
          <ArrowUpwardRoundedIcon />
        </div>
        <div className="Total">
          <AttachMoneyRoundedIcon />
        </div>
      </div>
    </>
  );
}
