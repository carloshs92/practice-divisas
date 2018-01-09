var Path = {};
Path.base       = __dirname + '/..';
Path.src        = {};
Path.src.base   = Path.base + "/src";
Path.src.app    = Path.src.base + "/app";
Path.src.assets = Path.src.base + "/assets";

Path.src.icons  = Path.src.assets + "/icons";
Path.src.styles = Path.src.assets + "/styles";
Path.src.fonts  = Path.src.assets + "/fonts";

module.exports = Path;
