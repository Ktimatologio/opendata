<?php

namespace Drupal\datastore\SqlEndpoint\Helper;

/**
 * Class GetStringsFromStateMachineExecution.
 */
class GetStringsFromStateMachineExecution {
  private $execution;
  private $strings = [];
  private $currentString = "";

  /**
   * Constructor.
   */
  public function __construct(array $stateMachineExecution) {
    $this->execution = $stateMachineExecution;
  }

  /**
   * Get.
   */
  public function get() {
    foreach ($this->execution as $states_or_input) {
      if ($this->isStates($states_or_input)) {
        $this->processStates($states_or_input);
        continue;
      }

      $input = $states_or_input;
      $this->currentString .= $input;
    }

    $this->saveAndResetCurrentString();

    return $this->strings;
  }

  /**
   * Private.
   */
  private function processStates(array $states) {
    if ($this->containsFirstState($states)) {
      $this->saveAndResetCurrentString();
    }
  }

  /**
   * Private.
   */
  private function saveAndResetCurrentString() {
    if (!empty($this->currentString)) {
      $this->strings[] = $this->currentString;
      $this->currentString = "";
    }
  }

  /**
   * Private.
   */
  private function isStates($input): bool {
    return is_array($input);
  }

  /**
   * Private.
   */
  private function containsFirstState(array $states): bool {
    return in_array(0, $states);
  }

}
