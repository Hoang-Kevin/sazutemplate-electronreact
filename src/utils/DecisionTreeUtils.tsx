const Scents = require('./scentConfig.json')

/** Get the current Depth of the decision tree */
export const getDepth = (tree: any): number => {
    /**
    * Set depth to 1 because we start at the root choice
    */
    let depth: number = 1

    /**
     * Store all depths of the tree
     */
    let depths: Array<number> = []

    /**
     * Check all choices of the decision tree
     * Recursive function called for each choice of the tree
     * @param {Array} choices Actual Choices
     */
    function recursiveProfondeur(choices: any) {
        if (choices.length > 1) {
            for (let i = 0; i < choices.length; i++) {
                if (choices[i].choices) {
                    depth++
                    recursiveProfondeur(choices[i].choices)
                } 
                else {
                    if (!checkChoices(choices)) {
                        
                        if (depth != 1 && depth != depths[depths.length - 2]) {
                            depths.push(depth)
                            depth = depths[depths.length - 2] ?? 1
                        }
                    }
                }
            }
        }
    }
    recursiveProfondeur(tree.choices)
    if (depths.length === 0) {
        depths.push(1)
    }
    return Math.max(...depths)
}

/**
 * Check if the choice has one choice with a depth > 1
 * @param {Object} choice 
 * @returns {Boolean} True if the choice has one choice with a depth > 1
 */
function checkChoices(choice: any) {
    if (choice[0].choices?.length > 1 || choice[1].choices?.length > 1) {
        return true
    } else {
        return false
    }
}
