"use strict";

export const materials = [
    {
        id: 1,
        enemies: [
            {
                name: "史莱姆",
                materialsPerEnemy: [0.6723, 0.1792, 0.0448],
                type: "普通",
            },
            {
                name: "大型史莱姆",
                materialsPerEnemy: [1.6808, 0.4482, 0.112],
                type: "普通",
            },
        ],
        names: ["史莱姆凝液", "史莱姆清", "史莱姆原浆"],
        keys: ["SlimeCondensate", "SlimeSecretions", "SlimeConcentrate"],
    },
    {
        id: 2,
        enemies: [
            {
                name: "丘丘人",
                materialsPerEnemy: [0.4202, 0.112, 0.028],
                type: "普通",
            },
            {
                name: "丘丘萨满",
                materialsPerEnemy: [0.1681, 0.0448, 0.0112],
                type: "普通",
            },
            {
                name: "丘丘射手",
                materialsPerEnemy: [0.1681, 0.0448, 0.0112],
                type: "普通",
            },
            {
                name: "驮兽·丘丘人",
                materialsPerEnemy: [2.5212, 0.6723, 0.168],
                type: "普通",
            },
            {
                name: "丘丘暴徒",
                materialsPerEnemy: [0.5253, 0.1401, 0.035],
                type: "精英",
            },
            {
                name: "丘丘王",
                materialsPerEnemy: [0.5253, 0.1401, 0.035],
                type: "精英",
            },
        ],
        names: ["破损的面具", "污秽的面具", "不祥的面具"],
        keys: ["DamagedMask", "StainedMask", "OminousMask"],
    },
    {
        id: 3,
        enemies: [
            {
                name: "丘丘萨满",
                materialsPerEnemy: [2.5212, 0.6723, 0.168],
                type: "普通",
            },
        ],
        names: ["导能绘卷", "封魔绘卷", "禁咒绘卷"],
        keys: ["DiviningScroll", "SealedScroll", "ForbiddenCurseScroll"],
    },
    {
        id: 4,
        enemies: [
            {
                name: "丘丘射手",
                materialsPerEnemy: [0.8404, 0.2241, 0.056],
                type: "普通",
            },
        ],
        names: ["牢固的箭簇", "锐利的箭簇", "历战的箭簇"],
        keys: ["FirmArrowhead", "SharpArrowhead", "WeatheredArrowhead"],
    },
    {
        id: 5,
        enemies: [
            {
                name: "丘丘暴徒",
                materialsPerEnemy: [1.5758, 0.4202, 0.1051],
                type: "精英",
            },
            {
                name: "丘丘王",
                materialsPerEnemy: [5.2526, 1.4006, 0.3502],
                type: "精英",
            },
        ],
        names: ["沉重号角", "黑铜号角", "黑晶号角"],
        keys: ["HeavyHorn", "BlackBronzeHorn", "BlackCrystalHorn"],
    },
    {
        id: 6,
        enemies: [
            {
                name: "深渊法师",
                materialsPerEnemy: [2.2324, 0.5953, 0.1487],
                type: "精英",
            },
            {
                name: "深渊[使徒/咏者]",
                materialsPerEnemy: [5.2526, 1.4006, 0.3502],
                type: "精英",
            },
        ],
        names: ["地脉的旧枝", "地脉的枯叶", "地脉的新芽"],
        keys: ["DeadLeyLineBranch", "DeadLeyLineLeaves", "LeyLineSprout"],
    },
    {
        id: 7,
        enemies: [
            {
                name: "遗迹[守卫/猎者]",
                materialsPerEnemy: [2.6263, 0.7003, 0.1751],
                type: "精英",
            },
            {
                name: "遗迹重机",
                materialsPerEnemy: [5.2526, 1.4006, 0.3502],
                type: "精英",
            },
        ],
        names: ["混沌装置", "混沌回路", "混沌炉心"],
        keys: ["ChaosDevice", "ChaosCircuit", "ChaosCore"],
    },
    {
        id: 8,
        enemies: [
            {
                name: "萤术士",
                materialsPerEnemy: [5.2526, 1.4006, 0.3502],
                type: "精英",
            },
        ],
        names: ["雾虚花粉", "雾虚草囊", "雾虚灯芯"],
        keys: ["MistGrassPollen", "MistGrass", "MistGrassWick"],
    },
    {
        id: 9,
        enemies: [
            {
                name: "债务处理人",
                materialsPerEnemy: [5.2526, 1.4006, 0.3502],
                type: "精英",
            },
        ],
        names: ["猎兵祭刀", "特工祭刀", "督察长祭刀"],
        keys: [
            "HuntersSacrificialKnife",
            "AgentsSacrificialKnife",
            "InspectorsSacrificialKnife",
        ],
    },
    {
        id: 10,
        enemies: [
            {
                name: "愚人众先遣队",
                materialsPerEnemy: [4.202, 1.1205, 0.28],
                type: "普通",
            },
            {
                name: "驮兽·愚人众",
                materialsPerEnemy: [8.404, 2.241, 0.56],
                type: "普通",
            },
            {
                name: "萤术士",
                materialsPerEnemy: [0.5253, 0.1401, 0.035],
                type: "精英",
            },
            {
                name: "债务处理人",
                materialsPerEnemy: [0.5253, 0.1401, 0.035],
                type: "精英",
            },
        ],
        names: ["新兵的徽记", "士官的徽记", "尉官的徽记"],
        keys: ["RecruitsInsignia", "SergeantsInsignia", "LieutenantsInsignia"],
    },
    {
        id: 11,
        enemies: [
            {
                name: "驮兽·盗宝团",
                materialsPerEnemy: [5.0424, 1.3446, 0.336],
                type: "普通",
            },
            {
                name: "盗宝团",
                materialsPerEnemy: [1.2606, 0.3362, 0.084],
                type: "普通",
            },
        ],
        names: ["寻宝鸦印", "藏银鸦印", "攫金鸦印"],
        keys: [
            "TreasureHoarderInsignia",
            "SilverRavenInsignia",
            "GoldenRavenInsignia",
        ],
    },
    {
        id: 12,
        enemies: [
            {
                name: "骗骗花",
                materialsPerEnemy: [4.202, 1.1205, 0.28],
                type: "普通",
            },
        ],
        names: ["骗骗花蜜", "微光花蜜", "原素花蜜"],
        keys: ["WhopperflowerNectar", "ShimmeringNectar", "EnergyNectar"],
    },
    {
        id: 13,
        enemies: [
            {
                name: "龙蜥",
                materialsPerEnemy: [5.2526, 1.4006, 0.3502],
                type: "精英",
            },
        ],
        names: ["脆弱的骨片", "结实的骨片", "石化的骨片"],
        keys: ["FragileBoneShard", "SturdyBoneShard", "FossilizedBoneShard"],
    },
    {
        id: 14,
        enemies: [
            {
                name: "野伏众",
                materialsPerEnemy: [0.8404, 0.2241, 0.056],
                type: "普通",
            },
            {
                name: "海乱鬼",
                materialsPerEnemy: [1.6808, 0.4482, 0.112],
                type: "普通",
            },
        ],
        names: ["破旧的刀镡", "影打刀镡", "名刀镡"],
        keys: ["OldHandguard", "KageuchiHandguard", "FamedHandguard"],
    },
    {
        id: 15,
        enemies: [
            {
                name: "遗迹机兵",
                materialsPerEnemy: [2.6263, 0.7003, 0.1751],
                type: "精英",
            },
        ],
        names: ["混沌机关", "混沌枢纽", "混沌真眼"],
        keys: ["ChaosGear", "ChaosAxis", "ChaosOculus"],
    },
    {
        id: 16,
        enemies: [
            {
                name: "藏镜仕女",
                materialsPerEnemy: [5.2526, 1.4006, 0.3502],
                type: "精英",
            },
        ],
        names: ["黯淡棱镜", "水晶棱镜", "偏光棱镜"],
        keys: ["DismalPrism", "CrystalPrism", "PolarizingPrism"],
    },
    {
        id: 17,
        enemies: [
            {
                name: "飘浮灵",
                materialsPerEnemy: [1.2606, 0.3362, 0.084],
                type: "普通",
            },
        ],
        names: ["浮游干核", "浮游幽核", "浮游晶化核"],
        keys: ["SpectralHusk", "SpectralHeart", "SpectralNucleus"],
    },
    {
        id: 18,
        enemies: [
            {
                name: "兽境猎犬",
                materialsPerEnemy: [5.2526, 1.4006, 0.3502],
                type: "精英",
            },
            {
                name: "兽境幼兽",
                materialsPerEnemy: [2.6263, 0.7003, 0.1751],
                type: "精英",
            },
        ],
        names: ["隐兽指爪", "隐兽利爪", "隐兽鬼爪"],
        keys: ["ConcealedClaw", "ConcealedUnguis", "ConcealedTalon"],
    },
    {
        id: 19,
        enemies: [
            {
                name: "黑蛇众",
                materialsPerEnemy: [6.5658, 1.7508, 0.4378],
                type: "精英",
            },
            {
                name: "深渊[使徒/咏者]",
                materialsPerEnemy: [0.5253, 0.1401, 0.035],
                type: "精英",
            },
        ],
        names: ["晦暗刻像", "夤夜刻像", "幽邃刻像"],
        keys: ["GloomyStatuette", "DarkStatuette", "DeathlyStatuette"],
    },
    {
        id: 20,
        enemies: [
            {
                name: "蕈兽",
                materialsPerEnemy: [0.8404, 0.2241, 0.056],
                type: "普通",
            },
            {
                name: "真蕈",
                materialsPerEnemy: [1.6808, 0.4482, 0.112],
                type: "普通",
            },
            {
                name: "[活化/枯焦]蕈兽",
                materialsPerEnemy: [0.2101, 0.056, 0.014],
                type: "精英",
            },
            {
                name: "[活化/枯焦]真蕈",
                materialsPerEnemy: [0.4202, 0.1121, 0.028],
                type: "精英",
            },
        ],
        names: ["蕈兽孢子", "荧光孢粉", "孢囊晶尘"],
        keys: ["FungalSpores", "LuminescentPollen", "CrystallineCystDust"],
    },
    {
        id: 21,
        enemies: [
            {
                name: "[活化/枯焦]蕈兽",
                materialsPerEnemy: [1.0505, 0.2801, 0.07],
                type: "精英",
            },
            {
                name: "[活化/枯焦]真蕈",
                materialsPerEnemy: [2.101, 0.5602, 0.1401],
                type: "精英",
            },
        ],
        names: ["失活菌核", "休眠菌核", "茁壮菌核"],
        keys: [
            "InactivatedFungalNucleus",
            "DormantFungalNucleus",
            "RobustFungalNucleus",
        ],
    },
    {
        id: 22,
        enemies: [
            {
                name: "镀金旅团·低级",
                materialsPerEnemy: [1.0505, 0.2801, 0.07],
                type: "普通",
            },
            {
                name: "镀金旅团·中级",
                materialsPerEnemy: [2.101, 0.5602, 0.1401],
                type: "普通",
            },
            {
                name: "镀金旅团·高级",
                materialsPerEnemy: [2.9414, 0.7844, 0.196],
                type: "普通",
            },
            {
                name: "驮兽·镀金旅团",
                materialsPerEnemy: [5.0424, 1.3446, 0.336],
                type: "普通",
            },
        ],
        names: ["褪色红绸", "镶边红绸", "织金红绸"],
        keys: ["FadedRedSatin", "TrimmedRedSilk", "RichRedBrocade"],
    },
    {
        id: 23,
        enemies: [
            {
                name: "遗迹龙兽",
                materialsPerEnemy: [3.9394, 1.0505, 0.2626],
                type: "精英",
            },
        ],
        names: ["混沌容器", "混沌模块", "混沌锚栓"],
        keys: ["ChaosStorage", "ChaosModule", "ChaosBolt"],
    },
    {
        id: 24,
        enemies: [
            {
                name: "元能构装体",
                materialsPerEnemy: [2.6263, 0.7003, 0.1751],
                type: "精英",
            },
        ],
        names: ["破缺棱晶", "混浊棱晶", "辉光棱晶"],
        keys: ["DamagedPrism", "TurbidPrism", "RadiantPrism"],
    },
    {
        id: 25,
        enemies: [
            {
                name: "圣骸兽",
                materialsPerEnemy: [6.5658, 1.7508, 0.4378],
                type: "精英",
            },
        ],
        names: ["残毁的横脊", "密固的横脊", "锲纹的横脊"],
        keys: ["DesiccatedShell", "SturdyShell", "MarkedShell"],
    },
    {
        id: 26,
        enemies: [
            {
                name: "丘丘游侠",
                materialsPerEnemy: [5.2526, 1.4006, 0.3502],
                type: "精英",
            },
        ],
        names: ["来自何处的待放之花", "何人所珍藏之花", "漫游者的盛放之花"],
        keys: [
            "AFlowerYetToBloom",
            "TreasuredFlower",
            "WanderersBloomingFlower",
        ],
    },
    {
        id: 27,
        enemies: [
            {
                name: "小型原海异兽",
                materialsPerEnemy: [0.8404, 0.2241, 0.056],
                type: "普通",
            },
            {
                name: "大型原海异兽",
                materialsPerEnemy: [1.6808, 0.4482, 0.112],
                type: "普通",
            },
        ],
        names: ["异海凝珠", "异海之块", "异色结晶石"],
        keys: [
            "TransoceanicPearl",
            "TransoceanicChunk",
            "XenochromaticCrystal",
        ],
    },
    {
        id: 28,
        enemies: [
            {
                name: "大型发条机关",
                materialsPerEnemy: [3.3616, 0.8964, 0.224],
                type: "普通",
            },
            {
                name: "小型发条机关",
                materialsPerEnemy: [1.2606, 0.3362, 0.084],
                type: "普通",
            },
        ],
        names: ["啮合齿轮", "机关正齿轮", "奇械机芯齿轮"],
        keys: ["MeshingGear", "MechanicalSpurGear", "ArtificedDynamicGear"],
    },
    {
        id: 29,
        enemies: [
            {
                name: "浊水幻灵",
                materialsPerEnemy: [5.2526, 1.4006, 0.3502],
                type: "精英",
            },
        ],
        names: ["浊水的一滴", "浊水的一掬", "初生的浊水幻灵"],
        keys: [
            "DropOfTaintedWater",
            "ScoopOfTaintedWater",
            "NewbornTaintedHydroPhantasm",
        ],
    },
    {
        id: 30,
        enemies: [
            {
                name: "大型隙境原体",
                materialsPerEnemy: [6.5658, 1.7508, 0.4378],
                type: "精英",
            },
            {
                name: "隙境原体",
                materialsPerEnemy: [3.9394, 1.0505, 0.2626],
                type: "精英",
            },
        ],
        names: ["隙间之核", "外世突触", "异界生命核"],
        keys: ["RiftCore", "ForeignSynapse", "AlienLifeCore"],
    },
    {
        id: 31,
        enemies: [
            {
                name: "役人",
                materialsPerEnemy: [5.2526, 1.4006, 0.3502],
                type: "精英",
            },
        ],
        names: ["老旧的役人怀表", "役人的制式怀表", "役人的时时刻刻"],
        keys: [
            "OldOperativesPocketWatch",
            "OperativesStandardPocketWatch",
            "OperativesConstancy",
        ],
    },
    {
        id: 32,
        enemies: [
            {
                name: "玄文兽",
                materialsPerEnemy: [3.9394, 1.0505, 0.2626],
                type: "精英",
            },
        ],
        names: ["羽状鳍翅", "月色鳍翅", "渊光鳍翅"],
        keys: ["FeatheryFin", "LunarFin", "ChasmlightFin"],
    },
];
