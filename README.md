# commits
Generate commits using github/actions, you can generate by using this template and configure + running on workflow! 

No need for coding

No need for install / run on local


<div align="center">
<img src="https://user-images.githubusercontent.com/26633162/118363461-0875f680-b5c7-11eb-9395-a4d0b02377d5.jpg" />
</div>

Just using mouse.

## DEMO

### Before
![before](https://user-images.githubusercontent.com/26633162/118362422-107f6780-b5c2-11eb-98c8-b013cffc9d25.png)
### After
![after](https://user-images.githubusercontent.com/26633162/118362426-12492b00-b5c2-11eb-9f78-9d7f7fd14eb3.png)


## How to use 
1. Click the `Use this template`, do not use `Fork`, fork repo might not be calculated.
2. After using template, it'll redirect to your repo's page, click `Actions`
3. Click the `manually-trigger` in the left aside ![commit-history](https://user-images.githubusercontent.com/26633162/118362475-3573da80-b5c2-11eb-86ee-4852b3aab3a7.jpg)
4. **Fill your email (need to be your github account email)**, and configure others
5. Run workflow

## Configure value

1. startDate: hmmm... the start date for this process
2. count: commit times per day, (eg. `5`)
3. useDynamic: if true, will get the random value between 1 to `count` each day, so you can get a more real commit history / color.
4. workdayOnly: only commit when the day is `MON` ~ `FRI`

## I regret to commit to much commit!
Calm! Just remove the repo you generate from this template, then your commit history will resume back.


## Developement
This project use the [google/zx](https://github.com/google/zx) as the node shell-script, please make sure your node version support `.mjs`, I personally recommend using `v16`.

```js
$ yarn
```


## LICENSE
MIT
