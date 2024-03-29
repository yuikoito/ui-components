import { styleModel } from "models/styleModel";

export const loader4: styleModel = {
  title: "loader4",
  scss: `.loader4 {
  border: 0.75rem solid rgba(255, 255, 255, 0.5);
  border-top: 0.75rem solid #333c5f;
  border-radius: 50%;
  width: 3.5em;
  height: 3.5em;
  animation: loader4 1s linear infinite;
  margin: 60px auto;
}
@keyframes loader4 {
  0% {
    transform: rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: rotate(180deg);
    opacity: 0.8;
  }
  100% {
    transform: rotate(360deg);
    opacity: 0.6;
  }
}
  `,
} as const;
