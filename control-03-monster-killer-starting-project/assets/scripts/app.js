const PLAYER_ATTACK_VALUE = 10;
const PLAYER_STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 10;
const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG";
const MODE_MONSTER_ATTACK = "MONSTER_ATTACK";
let hasBonusLife = true;

function enterLifeValue() {
  let enteredValue = prompt("Maximum life for you and the monster.", "100");
  try {
    if (isNaN(enteredValue) || enteredValue <= 0) {
      throw { error: "you have to enter value that is number more than 0" };
    }
  } catch (error) {
    console.log(error);
    enteredValue = 100;
  }
  return parseInt(enteredValue);
}

let chosenMaxLife = enterLifeValue();

let gameLog = [];

let currenrMonsterLife = chosenMaxLife;

let currentPlayerLife = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function logging(ev, val, currentPlayerLife, currentMonsterLife) {
  let logEntry = {
    event: ev,
    value: val,
    playerHealth: currentPlayerLife,
    monsterHealth: currentMonsterLife,
  };
  if (ev === MODE_ATTACK || ev === MODE_STRONG_ATTACK) {
    //logEntry에서 존재하지 않는 속성도 이렇게 지정 가능함. 이러면 자동으로 속성이 추가됨.
    logEntry.target = "MONSTER";
  } else if (ev === MODE_MONSTER_ATTACK) {
    logEntry.target = "PLAYER";
  }
  gameLog.push(logEntry);
}

function showLog() {
  console.log(gameLog);
}

logBtn.addEventListener("click", showLog);

function reset() {
  currenrMonsterLife = chosenMaxLife;
  currentPlayerLife = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function judgment() {
  let originalPlayerLife = currentPlayerLife;
  if (currentPlayerLife - MONSTER_ATTACK_VALUE <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    alert("뒤질뻔했지만 보너스 생명 덕분에 살았다.");
    currentPlayerLife = originalPlayerLife;
    return;
  }
  currentPlayerLife -= dealPlayerDamage(MONSTER_ATTACK_VALUE);
  console.log("몬스터애택");
  logging(
    MODE_MONSTER_ATTACK,
    MONSTER_ATTACK_VALUE,
    currentPlayerLife,
    currenrMonsterLife
  );
  let gameResult;
  if (currenrMonsterLife <= 0 && currentPlayerLife > 0) {
    alert("YOU WIN");
    logging("GAME_OVER", "WON", currentPlayerLife, currenrMonsterLife);
  } else if (currentPlayerLife <= 0 && currenrMonsterLife > 0) {
    alert("YOU LOSE");
    logging("GAME_OVER", "LOSE", currentPlayerLife, currenrMonsterLife);
  } else if (currentPlayerLife <= 0 && currenrMonsterLife <= 0) {
    alert("DRAW");
    logging("GAME_OVER", "DRAW", currentPlayerLife, currenrMonsterLife);
  }
  if (currenrMonsterLife <= 0 || currentPlayerLife <= 0) {
    reset();
  }
}

function attack(mode) {
  let attackValue;
  if (mode === MODE_ATTACK) {
    attackValue = PLAYER_ATTACK_VALUE;
  } else if (mode === MODE_STRONG_ATTACK) {
    attackValue = PLAYER_STRONG_ATTACK_VALUE;
  }
  currenrMonsterLife -= dealMonsterDamage(attackValue);
  logging(mode, attackValue, currentPlayerLife, currenrMonsterLife);
  judgment();
}

function attackHandler() {
  attack(MODE_ATTACK);
}

function strongAttackHandler() {
  attack(MODE_STRONG_ATTACK);
}

function healHandler() {
  if (currentPlayerLife >= chosenMaxLife - HEAL_VALUE) {
    alert("you can't heal over your initial value");
  } else {
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerLife += HEAL_VALUE;
    logging("HEAL", HEAL_VALUE, currentPlayerLife, currenrMonsterLife);
    judgment();
  }
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healHandler);
