declare module 'rclnodejs' {
  /**
   * A ROS guard condition containing a callback executed when the
   * guard condition is triggered.
   */
  class GuardCondition extends Entity {
    /**
     * Triggers the guard condition.
     */
    trigger(): void;
  }
}
