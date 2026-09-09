import {GameEngine} from './game/GameEngine.js';
import {BlocklyManager} from './blockly/BlocklyManager.js';
import {UIManager} from './ui/UIManager.js';
import {ProgressManager} from './progress/ProgressManager.js';

document.querySelector('#app').innerHTML=`
  <header>
    <div class="brand"><span>🤖</span><div><b>КосмоКод</b><small>Лаборатория переменных</small></div></div>
    <nav id="levels"></nav>
    <button id="wipe" class="ghost">Сбросить прогресс</button>
  </header>
  <main>
    <section class="mission">
      <div class="mission-copy"><span class="eyebrow">МИССИЯ</span><h1 id="levelTitle"></h1><p id="task"></p></div>
      <div class="actions"><button id="hint" class="ghost">💡 Подсказка</button><button id="reset" class="ghost">↻ Сбросить</button><button id="run" class="primary">▶ Запустить</button></div>
    </section>
    <div class="layout">
      <section class="code-panel card">
        <div class="panel-title"><div><span class="step">1</span><b>КОМАНДЫ</b><i>перетащи вправо</i></div><div><span class="step">2</span><b>ПРОГРАММА</b></div><button id="clear" class="link">Очистить</button></div>
        <div id="blockly"></div>
      </section>
      <section class="game-panel card">
        <div class="panel-title"><div><span class="step">3</span><b>ИГРА</b></div><span>● СИСТЕМЫ В НОРМЕ</span></div>
        <div class="game-content">
          <div id="board" class="board"></div>
          <div class="controls"><button data-move="0,-1">↑</button><div><button data-move="-1,0">←</button><button data-move="0,1">↓</button><button data-move="1,0">→</button></div><small>Управляй стрелками</small></div>
          <aside class="memory-panel"><div class="memory-heading"><b>ПЕРЕМЕННЫЕ</b><small>Память робота</small></div><div id="variables"></div></aside>
        </div>
      </section>
    </div>
  </main>
  <div id="toast" class="toast"></div><div id="modal" class="modal"></div>`;

const progress=new ProgressManager(),ui=new UIManager(),engine=new GameEngine(ui,progress),blockly=new BlocklyManager(document.querySelector('#blockly'),engine);
engine.attachBlockly(blockly);ui.bind(engine,blockly,progress);engine.load(Math.min(progress.data.unlockedLevel,5));
