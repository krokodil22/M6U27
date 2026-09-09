import * as Blockly from 'blockly';
export function registerBlocks(){
 const defs=[
  ['event_start','🚀 когда старт','event'],['event_bolt','🔩 когда собран болтик','event'],['event_fuel','⛽ когда собрано топливо','event'],['event_station','🛠 когда достигнута станция','event'],['event_fork','🔀 когда достигнута развилка','event'],
  ['short_path','идти коротким путём','stmt'],['long_path','идти длинным путём','stmt']
 ];
 defs.forEach(([type,label,kind])=>Blockly.Blocks[type]={init(){this.appendDummyInput().appendField(label); if(kind==='event')this.setNextStatement(true); else {this.setPreviousStatement(true);this.setNextStatement(true)} this.setColour(kind==='event'?285:185)}});
 Blockly.Blocks.change_var={init(){this.appendValueInput('VALUE').setCheck('Number').appendField('изменить').appendField(new Blockly.FieldDropdown([['bolts','bolts'],['fuel','fuel']]),'VAR').appendField('на');this.setPreviousStatement(true);this.setNextStatement(true);this.setColour(32)}};
 Blockly.Blocks.set_var={init(){this.appendValueInput('VALUE').setCheck('Number').appendField('установить').appendField(new Blockly.FieldDropdown([['bolts','bolts'],['fuel','fuel']]),'VAR').appendField('в');this.setPreviousStatement(true);this.setNextStatement(true);this.setColour(32)}};
 Blockly.Blocks.station_cost={init(){this.appendDummyInput().appendField('стоимость станции');this.setOutput(true,'Number');this.setColour(55)}};
 Blockly.Blocks.robot_if={init(){this.appendValueInput('IF0').setCheck('Boolean').appendField('если');this.appendStatementInput('DO0').appendField('то');this.appendStatementInput('ELSE').appendField('иначе');this.setPreviousStatement(true);this.setNextStatement(true);this.setColour(190)}};
}
