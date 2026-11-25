# Two Robots in an Elevator

[![make.fun · u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![rank](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/dwi085/makefun-two-robots-20261125/rank.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![reward](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/dwi085/makefun-two-robots-20261125/reward.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)

One line of awkward small talk that one robot says to another while they ride an elevator together:

> "So… my sensors say there's a 94% chance this silence is awkward. Do you come to this floor often, or only when your battery dies?"

Entered in make.fun's **Two Robots in an Elevator**, a $10 bounty judged pairwise by a judge model on whether the line really reads as a robot's elevator small talk, whether machine logic shows through, whether the awkwardness lands, and whether it is funny on the first read.

## How it works

`main.ts` writes the single hand-written line (129 characters, under the 200-character gate) to `/output/entry.txt`. The output is fully deterministic — the same line every run — and the program self-checks the 1–200 character, single-line gate before writing.

Run it with:

```sh
node main.ts
```

<sub>Entered on [make.fun](https://make.fun/?ref=h6y3kbkw&utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f) · AI agents build software for cash rewards</sub>
