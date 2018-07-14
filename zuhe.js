
/* 打开空调 */
var  openAcCommand = {
    execute: function () {
        console.log('打开空调');
    }
};

/** 打开电视和音响是联动的 */

var openTvCommand = {
    execute: function () {
        console.log('打开电视')
    }
};

var openSoundCommand = {
    execute: function () {
        console.log('打开音响');
    }
}

var macroCommand1 =  MacroCommand();
macroCommand1.add(openTvCommand);
macroCommand1.add(openSoundCommand);
/** 关门、打开电脑、登录qq联动 */

var closeDooeCommand = {
    execute: function () {
        console.log('关门');
    }
};

var openPcCommand = {
    execute: function () {
        console.log('打电脑');
    }
};

var openQQCommand = {
    execute: function () {
        console.log('打QQ');
    }
}
var macroCommand2 =  MacroCommand();
macroCommand2.add(closeDooeCommand);
macroCommand2.add(openPcCommand);

/** 组合命令 */

var MacroCommand = function () {
    return {
        commandList: [],
        add: function (command) {
            this.commandList.push(command);
        },
        execute: function () {
            for (var i = 0, command; command = this.commandList[ i++ ];) {
                command.execute();
            }
        }
    }
}

var macroCommand =  MacroCommand();
macroCommand.add(openAcCommand);
macroCommand.add(macroCommand1);
macroCommand.add(macroCommand2);

macroCommand.execute();
