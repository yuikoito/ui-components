import { styleModel } from "models/styleModel";

export const loader5: styleModel = {
  title: "loader5",
  scss: `.loader5 {
  box-sizing: border-box;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  box-shadow: 0 -2rem 0 #eee, 1.4rem -1.4rem 0 #ddd, 2rem 0 0 #ccc,
    1.4rem 1.4rem 0 rgba(51, 60, 94, 0.2), 0 2rem 0 rgba(51, 60, 94, 0.4),
    -1.4rem 1.4rem 0 rgba(51, 60, 94, 0.6), -2rem 0 0 rgba(51, 60, 94, 0.8),
    -1.4rem -1.4rem 0 #333c5f;
  animation: loader5 1s steps(8) 0s infinite;
  margin: 90px auto;
}

@keyframes loader5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`,
} as const;
