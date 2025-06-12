// Base de dados completa de produtos e tratamentos baseada na pesquisa
const COMPLETE_HAIR_DATABASE = {
    // Classificação detalhada por tipo de cabelo
    hairTypes: {
        '1A': { // Liso fino
            description: {
                pt: 'Cabelo liso, fino e delicado. Tende à oleosidade rápida na raiz e falta de volume.',
                en: 'Straight, fine and delicate hair. Tends to get oily quickly at roots and lacks volume.'
            },
            characteristics: ['fine', 'oily_prone', 'low_volume', 'straight'],
            primaryNeeds: ['volume', 'oil_control', 'lightweight_products']
        },
        '1B': { // Liso médio
            description: {
                pt: 'Cabelo liso com espessura média. Equilibrado entre oleosidade e ressecamento.',
                en: 'Straight hair with medium thickness. Balanced between oiliness and dryness.'
            },
            characteristics: ['medium', 'balanced', 'straight'],
            primaryNeeds: ['balance', 'gentle_cleansing', 'light_conditioning']
        },
        '1C': { // Liso grosso
            description: {
                pt: 'Cabelo liso e grosso. Mais resistente, pode ter tendência ao frizz.',
                en: 'Straight and thick hair. More resistant, may tend to frizz.'
            },
            characteristics: ['thick', 'resistant', 'frizz_prone'],
            primaryNeeds: ['frizz_control', 'smoothing', 'intensive_conditioning']
        },
        '2A': { // Ondulado fino
            description: {
                pt: 'Ondas suaves e finas. Fácil de alisar, mas pode perder definição rapidamente.',
                en: 'Soft and fine waves. Easy to straighten but may lose definition quickly.'
            },
            characteristics: ['fine', 'loose_waves', 'definition_loss'],
            primaryNeeds: ['wave_enhancement', 'lightweight_styling', 'volume']
        },
        '2B': { // Ondulado médio
            description: {
                pt: 'Ondas mais definidas com espessura média. Pode ter frizz e precisa de definição.',
                en: 'More defined waves with medium thickness. May have frizz and needs definition.'
            },
            characteristics: ['medium', 'defined_waves', 'frizz_prone'],
            primaryNeeds: ['wave_definition', 'frizz_control', 'moisture']
        },
        '2C': { // Ondulado grosso
            description: {
                pt: 'Ondas bem definidas e grossas. Tendência ao frizz e volume excessivo.',
                en: 'Well-defined and thick waves. Tendency to frizz and excessive volume.'
            },
            characteristics: ['thick', 'strong_waves', 'high_frizz', 'high_volume'],
            primaryNeeds: ['frizz_control', 'definition', 'weight', 'moisture']
        },
        '3A': { // Cacheado solto
            description: {
                pt: 'Cachos largos e soltos. Brilho natural, mas pode ter frizz nas pontas.',
                en: 'Large and loose curls. Natural shine but may have frizz at the ends.'
            },
            characteristics: ['loose_curls', 'natural_shine', 'end_frizz'],
            primaryNeeds: ['curl_definition', 'end_treatment', 'light_moisture']
        },
        '3B': { // Cacheado médio
            description: {
                pt: 'Cachos em espiral bem definidos. Necessita hidratação regular e definição.',
                en: 'Well-defined spiral curls. Needs regular hydration and definition.'
            },
            characteristics: ['spiral_curls', 'defined', 'moisture_dependent'],
            primaryNeeds: ['intensive_hydration', 'curl_definition', 'anti_frizz']
        },
        '3C': { // Cacheado apertado
            description: {
                pt: 'Cachos apertados e densos. Muito propenso ao ressecamento e frizz.',
                en: 'Tight and dense curls. Very prone to dryness and frizz.'
            },
            characteristics: ['tight_curls', 'dense', 'dry_prone', 'high_frizz'],
            primaryNeeds: ['deep_hydration', 'nutrition', 'curl_definition', 'protection']
        },
        '4A': { // Crespo macio
            description: {
                pt: 'Cachos crespos macios com padrão em S. Frágil e propenso à quebra.',
                en: 'Soft coily curls with S pattern. Fragile and prone to breakage.'
            },
            characteristics: ['soft_coils', 's_pattern', 'fragile', 'breakage_prone'],
            primaryNeeds: ['strengthening', 'deep_moisture', 'gentle_handling', 'protection']
        },
        '4B': { // Crespo em Z
            description: {
                pt: 'Padrão em Z bem definido. Muito seco e necessita cuidados intensivos.',
                en: 'Well-defined Z pattern. Very dry and needs intensive care.'
            },
            characteristics: ['z_pattern', 'very_dry', 'shrinkage', 'dense'],
            primaryNeeds: ['intensive_moisture', 'nutrition', 'length_retention', 'protection']
        },
        '4C': { // Crespo muito apertado
            description: {
                pt: 'Padrão muito apertado, quase imperceptível. Extremamente frágil e seco.',
                en: 'Very tight pattern, almost imperceptible. Extremely fragile and dry.'
            },
            characteristics: ['very_tight', 'imperceptible_pattern', 'extremely_fragile', 'very_dry'],
            primaryNeeds: ['maximum_moisture', 'strengthening', 'gentle_products', 'protection']
        }
    },

    // Produtos específicos por marca e necessidade
    products: {
        // MARCAS BRASILEIRAS
        natura: {
            hydration: {
                '1': ['Natura Plant Shampoo Detox', 'Natura Lumina Condicionador Hidratante'],
                '2': ['Natura Lumina Shampoo', 'Natura Plant Condicionador Nutritivo'],
                '3': ['Natura Plant Shampoo Cachos', 'Natura Lumina Máscara Hidratante'],
                '4': ['Natura Plant Shampoo Nutritivo', 'Natura Lumina Máscara Intensiva']
            },
            styling: {
                '1': ['Natura Plant Mousse Volumizador', 'Natura Lumina Spray Texturizador'],
                '2': ['Natura Lumina Creme Modelador', 'Natura Plant Leave-in'],
                '3': ['Natura Plant Creme para Cachos', 'Natura Lumina Ativador de Cachos'],
                '4': ['Natura Plant Creme Nutritivo', 'Natura Lumina Óleo Capilar']
            }
        },
        
        boticario: {
            hydration: {
                '1': ['O Boticário Nativa SPA Quinoa Shampoo', 'O Boticário Match Condicionador'],
                '2': ['O Boticário Match Science Shampoo', 'O Boticário Nativa SPA Condicionador'],
                '3': ['O Boticário Match Science Cachos', 'O Boticário Nativa SPA Máscara'],
                '4': ['O Boticário Match Science Reconstrução', 'O Boticário Nativa SPA Intensivo']
            },
            treatment: {
                '1': ['O Boticário Match Science Crescimento', 'O Boticário Nativa SPA Tônico'],
                '2': ['O Boticário Match Science Reconstrução', 'O Boticário Nativa SPA Ampola'],
                '3': ['O Boticário Match Science Máscara', 'O Boticário Nativa SPA Tratamento'],
                '4': ['O Boticário Match Science Intensivo', 'O Boticário Nativa SPA Reparador']
            }
        },

        truss: {
            hydration: {
                '1': ['Truss Professional Uso Diário Shampoo', 'Truss Delicate Condicionador'],
                '2': ['Truss Cachos Shampoo', 'Truss Infusion Condicionador'],
                '3': ['Truss Cachos Shampoo Hidratante', 'Truss Nutri Infusion Máscara'],
                '4': ['Truss Cachos Nutritivo', 'Truss Nutri Infusion Intensivo']
            },
            reconstruction: {
                '1': ['Truss Reconstructor Ampola', 'Truss Uso Obrigatório Spray'],
                '2': ['Truss Infusion Máscara', 'Truss Reconstructor'],
                '3': ['Truss Cachos Máscara Nutritiva', 'Truss Reconstructor Intensivo'],
                '4': ['Truss Nutri Infusion Reparador', 'Truss Uso Obrigatório Óleo']
            },
            styling: {
                '1': ['Truss Frizz Zero Spray', 'Truss Delicate Finalizador'],
                '2': ['Truss Cachos Ativador', 'Truss Frizz Zero Creme'],
                '3': ['Truss Cachos Creme Modelador', 'Truss Cachos Gelatina'],
                '4': ['Truss Cachos Creme Nutritivo', 'Truss Nutri Infusion Leave-in']
            }
        },

        forever_liss: {
            hydration: {
                '1': ['Forever Liss Desmaia Cabelo Shampoo', 'Forever Liss Banho de Verniz'],
                '2': ['Forever Liss Xô Frizz Shampoo', 'Forever Liss Cauter Restore'],
                '3': ['Forever Liss Cachos Shampoo', 'Forever Liss Abacachos Máscara'],
                '4': ['Forever Liss Cachos Crespos Shampoo', 'Forever Liss Catiônica Máscara']
            },
            nutrition: {
                '1': ['Forever Liss Olive Oil Máscara', 'Forever Liss Óleo de Argan'],
                '2': ['Forever Liss Maracujá Máscara', 'Forever Liss Blindagem Capilar'],
                '3': ['Forever Liss Abacachos Nutrição', 'Forever Liss Cachos Óleo'],
                '4': ['Forever Liss Cachos Crespos Nutrição', 'Forever Liss Mix de Óleos']
            }
        },

        lola: {
            curly_products: {
                '2': ['Lola Cosmetics Morte Súbita Shampoo', 'Lola Cosmetics Morte Súbita Condicionador'],
                '3': ['Lola Cosmetics Eu Amo Meus Cachos Shampoo', 'Lola Cosmetics Cachos Máscara'],
                '4': ['Lola Cosmetics Meu Cacho Minha Vida Shampoo', 'Lola Cosmetics Crespos Máscara']
            },
            styling: {
                '2': ['Lola Cosmetics Creme para Pentear Ondas', 'Lola Cosmetics Spray Volumizador'],
                '3': ['Lola Cosmetics Creme para Pentear Cachos', 'Lola Cosmetics Ativador de Cachos'],
                '4': ['Lola Cosmetics Creme para Pentear Crespos', 'Lola Cosmetics Manteiga de Karité']
            }
        },

        embelleze: {
            novex: {
                '1': ['Embelleze Novex Liso Shampoo', 'Embelleze Novex Hidratação'],
                '2': ['Embelleze Novex Ondas Shampoo', 'Embelleze Novex Nutrição'],
                '3': ['Embelleze Novex Cachos Shampoo', 'Embelleze Novex Cachos Máscara'],
                '4': ['Embelleze Novex Afro Hair Shampoo', 'Embelleze Novex Afro Hair Máscara']
            }
        },

        // MARCAS INTERNACIONAIS
        loreal: {
            professional: {
                '1': ['L\'Oréal Vitamino Color Shampoo', 'L\'Oréal Inforcer Condicionador'],
                '2': ['L\'Oréal Curl Expression Shampoo', 'L\'Oréal Absolut Repair Máscara'],
                '3': ['L\'Oréal Curl Expression Intensive', 'L\'Oréal Curl Expression Máscara'],
                '4': ['L\'Oréal Curl Expression Coils', 'L\'Oréal Metal Detox Máscara']
            }
        },

        kerastase: {
            lines: {
                '1': ['Kérastase Specifique Shampoo', 'Kérastase Nutritive Condicionador'],
                '2': ['Kérastase Discipline Shampoo', 'Kérastase Discipline Máscara'],
                '3': ['Kérastase Curl Manifesto Shampoo', 'Kérastase Curl Manifesto Máscara'],
                '4': ['Kérastase Curl Manifesto Intense', 'Kérastase Nutritive Intensive']
            }
        }
    },

    // Rotinas específicas por combinação de características
    routines: {
        // Cabelos lisos
        straight: {
            oily: {
                pt: [
                    'Lavagem diária ou em dias alternados com shampoo para cabelos oleosos',
                    'Condicionador apenas no comprimento e pontas',
                    'Máscara de hidratação 1x por semana',
                    'Shampoo seco entre as lavagens se necessário',
                    'Produtos volumizadores na raiz'
                ],
                en: [
                    'Daily or alternate day washing with oily hair shampoo',
                    'Conditioner only on lengths and ends',
                    'Hydration mask 1x per week',
                    'Dry shampoo between washes if needed',
                    'Volumizing products at roots'
                ]
            },
            normal: {
                pt: [
                    'Lavagem 2-3x por semana com shampoo suave',
                    'Condicionador do meio às pontas',
                    'Máscara de hidratação 1-2x por semana',
                    'Protetor térmico antes de ferramentas de calor',
                    'Finalizador para brilho e proteção'
                ],
                en: [
                    'Wash 2-3x per week with gentle shampoo',
                    'Conditioner from mid-lengths to ends',
                    'Hydration mask 1-2x per week',
                    'Heat protectant before heat tools',
                    'Finishing product for shine and protection'
                ]
            },
            dry: {
                pt: [
                    'Lavagem 2x por semana com shampoo hidratante',
                    'Condicionador generoso do meio às pontas',
                    'Máscara de hidratação 2x por semana',
                    'Óleo capilar nas pontas',
                    'Leave-in hidratante diariamente'
                ],
                en: [
                    'Wash 2x per week with moisturizing shampoo',
                    'Generous conditioner from mid-lengths to ends',
                    'Hydration mask 2x per week',
                    'Hair oil on ends',
                    'Moisturizing leave-in daily'
                ]
            }
        },

        // Cabelos ondulados
        wavy: {
            normal: {
                pt: [
                    'Lavagem 2-3x por semana com shampoo para ondas',
                    'Condicionador do meio às pontas',
                    'Máscara de hidratação 1-2x por semana',
                    'Leave-in para definição de ondas',
                    'Finalização com técnica de amassamento (scrunching)',
                    'Evitar pentear o cabelo seco'
                ],
                en: [
                    'Wash 2-3x per week with wave shampoo',
                    'Conditioner from mid-lengths to ends',
                    'Hydration mask 1-2x per week',
                    'Leave-in for wave definition',
                    'Finish with scrunching technique',
                    'Avoid combing dry hair'
                ]
            },
            frizzy: {
                pt: [
                    'Lavagem 2x por semana com shampoo anti-frizz',
                    'Condicionador abundante para desembaraçar',
                    'Máscara de nutrição 2x por semana',
                    'Creme para pentear com controle de frizz',
                    'Gel ou mousse para definição',
                    'Finalização com difusor em temperatura baixa'
                ],
                en: [
                    'Wash 2x per week with anti-frizz shampoo',
                    'Abundant conditioner for detangling',
                    'Nutrition mask 2x per week',
                    'Styling cream with frizz control',
                    'Gel or mousse for definition',
                    'Finish with diffuser on low heat'
                ]
            }
        },

        // Cabelos cacheados
        curly: {
            normal: {
                pt: [
                    'Lavagem 1-2x por semana com shampoo para cachos',
                    'Co-wash (lavagem só com condicionador) entre as lavagens',
                    'Condicionador abundante para desembaraçar',
                    'Máscara de hidratação 2x por semana',
                    'Leave-in específico para cachos',
                    'Creme ou gel para definição',
                    'Finalização com difusor ou plopping'
                ],
                en: [
                    'Wash 1-2x per week with curl shampoo',
                    'Co-wash between regular washes',
                    'Abundant conditioner for detangling',
                    'Hydration mask 2x per week',
                    'Curl-specific leave-in',
                    'Cream or gel for definition',
                    'Finish with diffuser or plopping'
                ]
            },
            damaged: {
                pt: [
                    'Lavagem 1x por semana com shampoo reconstrutivo',
                    'Co-wash 2x por semana',
                    'Máscara de reconstrução 1x por semana',
                    'Máscara de hidratação 2x por semana',
                    'Ampola de reconstrução quinzenalmente',
                    'Leave-in reparador',
                    'Óleos vegetais para nutrição',
                    'Evitar ferramentas de calor'
                ],
                en: [
                    'Wash 1x per week with reconstructive shampoo',
                    'Co-wash 2x per week',
                    'Reconstruction mask 1x per week',
                    'Hydration mask 2x per week',
                    'Reconstruction ampoule biweekly',
                    'Repairing leave-in',
                    'Vegetable oils for nutrition',
                    'Avoid heat tools'
                ]
            }
        },

        // Cabelos crespos
        coily: {
            normal: {
                pt: [
                    'Lavagem 1x por semana com shampoo suave',
                    'Co-wash 2-3x por semana',
                    'Pré-shampoo com óleos vegetais',
                    'Máscara de hidratação 3x por semana',
                    'Máscara de nutrição 1x por semana',
                    'Leave-in cremoso diariamente',
                    'Óleos para selar a hidratação',
                    'Finalização com creme para pentear',
                    'Proteção noturna com touca de cetim'
                ],
                en: [
                    'Wash 1x per week with gentle shampoo',
                    'Co-wash 2-3x per week',
                    'Pre-shampoo with vegetable oils',
                    'Hydration mask 3x per week',
                    'Nutrition mask 1x per week',
                    'Creamy leave-in daily',
                    'Oils to seal moisture',
                    'Finish with styling cream',
                    'Night protection with satin cap'
                ]
            },
            damaged: {
                pt: [
                    'Lavagem 1x por semana com shampoo reconstrutivo',
                    'Co-wash diário se necessário',
                    'Pré-shampoo obrigatório com óleos',
                    'Máscara de reconstrução 1x por semana',
                    'Máscara de hidratação 4x por semana',
                    'Ampola de reconstrução semanalmente',
                    'Leave-in reparador 2x ao dia',
                    'Mix de óleos para nutrição profunda',
                    'Evitar manipulação excessiva',
                    'Proteção total contra calor'
                ],
                en: [
                    'Wash 1x per week with reconstructive shampoo',
                    'Co-wash daily if needed',
                    'Mandatory pre-shampoo with oils',
                    'Reconstruction mask 1x per week',
                    'Hydration mask 4x per week',
                    'Reconstruction ampoule weekly',
                    'Repairing leave-in 2x daily',
                    'Oil mix for deep nutrition',
                    'Avoid excessive manipulation',
                    'Total heat protection'
                ]
            }
        }
    },

    // Tratamentos específicos por condição
    treatments: {
        damaged: {
            reconstruction: {
                pt: [
                    'Ampola de reconstrução: Truss Reconstructor, Forever Liss Reconstrução',
                    'Máscara reconstrutiva: L\'Oréal Absolut Repair, Kérastase Resistance',
                    'Shampoo reconstrutivo: O Boticário Match Science Reconstrução',
                    'Proteína capilar: Embelleze Novex Reconstrução'
                ],
                en: [
                    'Reconstruction ampoule: Truss Reconstructor, Forever Liss Reconstruction',
                    'Reconstructive mask: L\'Oréal Absolut Repair, Kérastase Resistance',
                    'Reconstructive shampoo: O Boticário Match Science Reconstruction',
                    'Hair protein: Embelleze Novex Reconstruction'
                ]
            }
        },
        
        high_porosity: {
            sealing: {
                pt: [
                    'Selador de cutículas: Inoar Argan Oil, Lola Cosmetics Selador',
                    'Vinagre de maçã diluído para fechar cutículas',
                    'Produtos com pH ácido para selar',
                    'Óleos vegetais para formar filme protetor'
                ],
                en: [
                    'Cuticle sealer: Inoar Argan Oil, Lola Cosmetics Sealer',
                    'Diluted apple cider vinegar to close cuticles',
                    'Acidic pH products for sealing',
                    'Vegetable oils to form protective film'
                ]
            }
        },

        oily_scalp: {
            control: {
                pt: [
                    'Shampoo seco: Natura Plant, O Boticário Match',
                    'Shampoo detox: Lola Cosmetics Papo Reto',
                    'Tônico adstringente: O Boticário Match Science',
                    'Argila verde para tratamento semanal'
                ],
                en: [
                    'Dry shampoo: Natura Plant, O Boticário Match',
                    'Detox shampoo: Lola Cosmetics Papo Reto',
                    'Astringent tonic: O Boticário Match Science',
                    'Green clay for weekly treatment'
                ]
            }
        },

        color_treated: {
            maintenance: {
                pt: [
                    'Shampoo para cabelos coloridos: L\'Oréal Vitamino Color',
                    'Máscara matizadora: Lola Cosmetics Purple Acid',
                    'Protetor de cor: Kérastase Chroma Absolu',
                    'Leave-in com proteção UV'
                ],
                en: [
                    'Color-treated shampoo: L\'Oréal Vitamino Color',
                    'Toning mask: Lola Cosmetics Purple Acid',
                    'Color protector: Kérastase Chroma Absolu',
                    'Leave-in with UV protection'
                ]
            }
        }
    },

    // Ingredientes ativos por necessidade
    active_ingredients: {
        hydration: ['ácido hialurônico', 'glicerina', 'pantenol', 'aloe vera', 'mel'],
        nutrition: ['óleos vegetais', 'manteigas', 'ceramidas', 'ácidos graxos'],
        reconstruction: ['queratina', 'proteínas', 'aminoácidos', 'creatina'],
        volume: ['proteínas hidrolisadas', 'polímeros', 'aminoácidos'],
        frizz_control: ['silicones', 'óleos', 'manteigas', 'polímeros'],
        curl_definition: ['polímeros naturais', 'géis', 'proteínas', 'umectantes']
    }
};

// Função para determinar tipo de cabelo com maior precisão
function determineDetailedHairType(answers) {
    const curvature = answers.curvature;
    const thickness = answers.thickness;
    const porosity = answers.porosity;
    const oiliness = answers.oiliness;
    const condition = answers.condition;
    const chemical = answers.chemical || [];
    const elasticity = answers.elasticity;
    const goals = answers.goals || [];
    
    // Determinar subtipo baseado em múltiplos fatores
    let subtype = 'A';
    
    // Lógica mais complexa para subtipo
    let subtypeScore = 0;
    
    if (thickness === 'thick') subtypeScore += 2;
    if (thickness === 'medium') subtypeScore += 1;
    
    if (porosity === 'high') subtypeScore += 2;
    if (porosity === 'medium') subtypeScore += 1;
    
    if (chemical.includes && (chemical.includes('bleaching') || chemical.includes('straightening'))) {
        subtypeScore += 2;
    } else if (chemical.includes && chemical.includes('coloring')) {
        subtypeScore += 1;
    }
    
    if (condition === 'damaged') subtypeScore += 1;
    if (elasticity === 'high') subtypeScore += 1;
    
    // Determinar subtipo final
    if (subtypeScore >= 4) {
        subtype = 'C';
    } else if (subtypeScore >= 2) {
        subtype = 'B';
    }
    
    const fullType = `${curvature}${subtype}`;
    const hairTypeData = COMPLETE_HAIR_DATABASE.hairTypes[fullType];
    
    return {
        type: fullType,
        curvature: curvature,
        subtype: subtype,
        thickness: thickness,
        porosity: porosity,
        oiliness: oiliness,
        condition: condition,
        chemical: chemical,
        elasticity: elasticity,
        goals: goals,
        description: hairTypeData ? hairTypeData.description : null,
        characteristics: hairTypeData ? hairTypeData.characteristics : [],
        primaryNeeds: hairTypeData ? hairTypeData.primaryNeeds : []
    };
}

// Função para gerar recomendações completas
function generateCompleteRecommendations(hairType, language = 'pt') {
    const curvatureGroup = hairType.curvature;
    const isPortuguese = language === 'pt';
    
    // Determinar categoria de rotina
    let routineCategory = 'normal';
    if (hairType.condition === 'damaged' || hairType.elasticity === 'low') {
        routineCategory = 'damaged';
    } else if (hairType.condition === 'frizzy' || hairType.porosity === 'high') {
        routineCategory = 'frizzy';
    } else if (hairType.oiliness === 'oily') {
        routineCategory = 'oily';
    } else if (hairType.oiliness === 'dry') {
        routineCategory = 'dry';
    }
    
    // Selecionar rotina baseada no tipo de cabelo
    let routineType = 'straight';
    if (curvatureGroup === '2') routineType = 'wavy';
    else if (curvatureGroup === '3') routineType = 'curly';
    else if (curvatureGroup === '4') routineType = 'coily';
    
    const routine = COMPLETE_HAIR_DATABASE.routines[routineType]?.[routineCategory]?.[language] || 
                   COMPLETE_HAIR_DATABASE.routines[routineType]?.normal?.[language] || [];
    
    // Selecionar produtos específicos
    const products = [];
    const brands = [];
    
    // Produtos por marca baseados no tipo
    Object.keys(COMPLETE_HAIR_DATABASE.products).forEach(brand => {
        const brandData = COMPLETE_HAIR_DATABASE.products[brand];
        
        // Adicionar produtos de hidratação
        if (brandData.hydration && brandData.hydration[curvatureGroup]) {
            products.push(...brandData.hydration[curvatureGroup]);
        }
        
        // Adicionar produtos de styling se disponível
        if (brandData.styling && brandData.styling[curvatureGroup]) {
            products.push(...brandData.styling[curvatureGroup]);
        }
        
        // Adicionar produtos específicos para cachos
        if (curvatureGroup >= '2' && brandData.curly_products && brandData.curly_products[curvatureGroup]) {
            products.push(...brandData.curly_products[curvatureGroup]);
        }
        
        // Adicionar marca à lista se tem produtos para este tipo
        if ((brandData.hydration && brandData.hydration[curvatureGroup]) ||
            (brandData.styling && brandData.styling[curvatureGroup]) ||
            (brandData.curly_products && brandData.curly_products[curvatureGroup])) {
            
            // Mapear nomes das marcas
            const brandNames = {
                natura: 'Natura',
                boticario: 'O Boticário',
                truss: 'Truss Professional',
                forever_liss: 'Forever Liss',
                lola: 'Lola Cosmetics',
                embelleze: 'Embelleze',
                loreal: 'L\'Oréal Professionnel',
                kerastase: 'Kérastase'
            };
            
            if (brandNames[brand] && !brands.includes(brandNames[brand])) {
                brands.push(brandNames[brand]);
            }
        }
    });
    
    // Adicionar tratamentos específicos baseados na condição
    if (hairType.condition === 'damaged') {
        const treatments = COMPLETE_HAIR_DATABASE.treatments.damaged.reconstruction[language] || [];
        products.push(...treatments);
    }
    
    if (hairType.porosity === 'high') {
        const sealers = COMPLETE_HAIR_DATABASE.treatments.high_porosity.sealing[language] || [];
        products.push(...sealers);
    }
    
    if (hairType.oiliness === 'oily') {
        const oilControl = COMPLETE_HAIR_DATABASE.treatments.oily_scalp.control[language] || [];
        products.push(...oilControl);
    }
    
    if (hairType.chemical.includes && (hairType.chemical.includes('coloring') || hairType.chemical.includes('bleaching'))) {
        const colorCare = COMPLETE_HAIR_DATABASE.treatments.color_treated.maintenance[language] || [];
        products.push(...colorCare);
    }
    
    // Remover duplicatas
    const uniqueProducts = [...new Set(products)];
    const uniqueBrands = [...new Set(brands)];
    
    return {
        routine: routine,
        products: uniqueProducts.slice(0, 12), // Limitar a 12 produtos
        brands: uniqueBrands,
        activeIngredients: getRecommendedIngredients(hairType, language)
    };
}

// Função para recomendar ingredientes ativos
function getRecommendedIngredients(hairType, language = 'pt') {
    const ingredients = [];
    
    if (hairType.condition === 'dry' || hairType.porosity === 'high') {
        ingredients.push(...COMPLETE_HAIR_DATABASE.active_ingredients.hydration);
    }
    
    if (hairType.condition === 'damaged' || hairType.elasticity === 'low') {
        ingredients.push(...COMPLETE_HAIR_DATABASE.active_ingredients.reconstruction);
    }
    
    if (hairType.curvature >= '3') {
        ingredients.push(...COMPLETE_HAIR_DATABASE.active_ingredients.nutrition);
    }
    
    if (hairType.goals.includes && hairType.goals.includes('curl-definition')) {
        ingredients.push(...COMPLETE_HAIR_DATABASE.active_ingredients.curl_definition);
    }
    
    if (hairType.goals.includes && hairType.goals.includes('frizz-control')) {
        ingredients.push(...COMPLETE_HAIR_DATABASE.active_ingredients.frizz_control);
    }
    
    if (hairType.goals.includes && hairType.goals.includes('volume')) {
        ingredients.push(...COMPLETE_HAIR_DATABASE.active_ingredients.volume);
    }
    
    return [...new Set(ingredients)].slice(0, 8); // Limitar a 8 ingredientes
}

