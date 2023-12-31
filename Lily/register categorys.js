  // Bru ima keep this file name. its funny out of context.
  // From Xeltalliv's example:
  // https://github.com/Xeltalliv/extensions/blob/examples/examples/other-default-field-types.js

  //im sorry i have to change the bind name
  const transfBound = runtime._convertPlaceholders.bind(runtime);
  runtime._convertPlaceholders = function(context, match, placeholder) {
    const retVal = transfBound(context, match, placeholder);

    const argInfo = context.blockInfo.arguments[placeholder] || {};
    const argsName = `args${context.outLineNum}`;
    const blockArgs = context.blockJSON[argsName];
    const argJSON = blockArgs[blockArgs.length-1];
    
    if (argInfo.type === ArgumentType.VARIABLE) {
      argJSON.type = 'field_variable';
      argJSON.variableTypes = [argInfo.variableType ?? ''];
      if (argInfo.variable) argJSON.variable = argInfo.variable;
    }
    return retVal;
  }

//Credits is registered via some added XML
Scratch.extensions.register(new TurboChargedMotion());
Scratch.extensions.register(new TurboChargedLooks());
Scratch.extensions.register(new TurboChargedSound());
Scratch.extensions.register(new TurboChargedEvents());
Scratch.extensions.register(new TurboChargedControl());
Scratch.extensions.register(new TurboChargedSensing());
Scratch.extensions.register(new TurboChargedOperators());
//variables is not accesible
//update: we will try making our own Variables Category.
//Scratch.extensions.register(new TurboChargedBETAVariables());