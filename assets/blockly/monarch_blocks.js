
Blockly.Blocks['contractdependency_1query'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Contract-GetOneValue");
    this.appendValueInput("contract")
        .setCheck("String")
        .appendField("ContractName");
    this.appendValueInput("table")
        .setCheck("String")
        .appendField("TableName");
    this.appendValueInput("scope")
        .setCheck("String")
        .appendField("Scope");
    this.appendValueInput("code")
        .setCheck("String")
        .appendField("Code");
    this.appendDummyInput()
        .appendField("KeyType")
        .appendField(new Blockly.FieldDropdown([["i64","i64"], ["string","string"]]), "keyType");
    this.appendValueInput("lower")
        .setCheck("String")
        .appendField("keyValue");
    this.appendValueInput("indexPos")
        .setCheck("Number")
        .appendField("IndexPosition");
    this.appendValueInput("targetKey")
        .setCheck("String")
        .appendField("TargetKeyName");
    this.setInputsInline(false);
    this.setOutput(true, "String");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['valueexporter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ValueExporter");
    this.appendValueInput("Values")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("Export your variable or multiple variables by object");
 this.setHelpUrl("");
  }
};

// Code generators

Blockly.JavaScript['contractdependency_1query'] = function(block) {
  var value_contract = Blockly.JavaScript.valueToCode(block, 'contract', Blockly.JavaScript.ORDER_ATOMIC);
  var value_table = Blockly.JavaScript.valueToCode(block, 'table', Blockly.JavaScript.ORDER_ATOMIC);
  var value_scope = Blockly.JavaScript.valueToCode(block, 'scope', Blockly.JavaScript.ORDER_ATOMIC);
  var value_code = Blockly.JavaScript.valueToCode(block, 'code', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_keytype = block.getFieldValue('keyType');
  var value_lower = Blockly.JavaScript.valueToCode(block, 'lower', Blockly.JavaScript.ORDER_ATOMIC);
  var value_indexpos = Blockly.JavaScript.valueToCode(block, 'indexPos', Blockly.JavaScript.ORDER_ATOMIC);
  var value_targetkey = Blockly.JavaScript.valueToCode(block, 'targetKey', Blockly.JavaScript.ORDER_ATOMIC);
  
  // TODO: Assemble JavaScript into code variable.
  // var code =`{
  //             "table":${value_table},
  //             "scope":${value_scope},
  //             "code":${value_code},
  //             "lower":${value_lower},
  //             "keyType":${dropdown_keytype},
  //             "indexPos":${value_indexpos},
  //             "targetKey":${value_targetkey}
  //           }`;
  // TODO: Change ORDER_NONE to the correct strength.
  var code = `
                monarch_getContract1Query(
                  {
                    "contract":${value_contract},
                    "table":${value_table},
                    "scope":${value_scope},
                    "code":${value_code},
                    "lower":${value_lower},
                    "keyType":'${dropdown_keytype}',
                    "indexPos":${value_indexpos},
                    "targetKey":${value_targetkey}
                  }
                )
              `;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['valueexporter'] = function(block) {
  var value_values = Blockly.JavaScript.valueToCode(block, 'Values', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `monarch_exportValues(${value_values})`;
  return code;
};